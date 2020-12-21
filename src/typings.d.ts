export { };
declare global {
    interface Window {
        webdesksdk: { tools: any; ta: any },
        state: { booking: string, http: any; }
    }
}