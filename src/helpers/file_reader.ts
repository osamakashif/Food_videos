export const readTSV = async (file_link: string): Promise<string> => {
    try {
        // Read text file from published link.
        const target = file_link;

        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/tsv;charset=UTF-8',
            }
        });
        if (res.status === 200) {
            const data = await res.text();
            return data
        } else {
            console.log(`Error code ${res.status}`);
            return ''
        }
    } catch (err) {
        console.log(err)
        return ''
    }
}