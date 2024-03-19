import { applicationDefault, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { isNumber } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import './server'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore('ifb-savvy-db');

    const pageString = Number(req.query.page);
    if (!isNumber(pageString)) {
        res.status(400).send({})
    };

    var totalCount: { count: number } = (await db.collection('Article').count().get()).data();

    var query = db.collection('Article').orderBy('Published', 'desc');


    if (!isNaN(pageString) && pageString != 0) {
        query = query.offset((pageString - 1) * 20).limit(20);
    }

    const documents = (await query.get()).docs.map(d => d.data());

    documents.forEach(d => 
            d.Published = d.Published.toDate()
    );

    res.status(200).json({
        results: documents,
        total: Math.ceil(totalCount.count / 20)
    })
}
