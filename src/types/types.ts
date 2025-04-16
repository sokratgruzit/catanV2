export type WalletData = [
    {
        id: string,
        title: string,
        img: string,
        type: string,
    },
    {
        id: string,
        title: string,
        img: string,
        type: string,
    }
];


export type ActiveTabTypes = {
    activeTab: 'sign_up' | 'sign_in' | 'unfinished_account' | false;
};