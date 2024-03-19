import Link from "next/link";

const POSITION = 6;

const Paginator = (props: { pages: number, current: number }) => {
    const i = (props.current <= POSITION) ? 0 : props.current - POSITION
    const j = (props.current < props.pages - POSITION) ? 0 : 4 - (props.pages - props.current);
    if (props.pages == undefined || props.pages == 0) {
        return <></>;
    } else {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${props.current ==  1 ? 'disabled' : ''}`}>
                        <Link className="page-link" href={`?page=${Number(props.current) - 1}`}>Previous</Link>
                    </li>
                    {[...Array(Math.min(props.pages, 10))].map((k, v) => <li key={v} className={`page-item ${((v + i - j == props.current - 1) ? 'active' : '')}`}><Link className="page-link" href={`?page=${v + 1 + i - j}`}>{v + 1 + i - j}</Link></li>)}
                    <li className={`page-item ${props.current ==  props.pages ? 'disabled' : ''}`}>
                        <Link className="page-link" href={`?page=${Number(props.current) + 1}`}>Next</Link>
                    </li>
                </ul>
            </nav>
        )
    }
};

export default Paginator;
