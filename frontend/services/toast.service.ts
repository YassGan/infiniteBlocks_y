import { Dispatch, SetStateAction } from "react";

export class ToastService {
    private setTitle :  Dispatch<SetStateAction<string | undefined>> = () => {};
    private setMessage :  Dispatch<SetStateAction<string | undefined>> = () => {};
    private setLevel :  Dispatch<SetStateAction<string | undefined>> = () => {};
    private setVisible : Dispatch<SetStateAction<boolean>> = () => {};

    public set = (title: string, message: string, level: string, visible: boolean) => {
        this.setTitle(title);
        this.setMessage(message);
        this.setLevel(level);
        this.setVisible(visible);
    }

    public setters = (setTitle:  Dispatch<SetStateAction<string | undefined>>, setMessage:  Dispatch<SetStateAction<string | undefined>>, setLevel :  Dispatch<SetStateAction<string | undefined>>, setVisible : Dispatch<SetStateAction<boolean>>) => {
        this.setTitle = setTitle;
        this.setMessage = setMessage;
        this.setLevel = setLevel;
        this.setVisible = setVisible;
    }
}