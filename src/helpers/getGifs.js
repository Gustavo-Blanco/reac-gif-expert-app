export const getGifs = async (category, limit = 10) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dtRmi7FGvKUvs5hr39XNAnHMCn77osAA&limit=${10}&q=${encodeURI(
        category
    )}`;

    const resp = await (await fetch(url)).json();
    const { data } = resp;

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
};
