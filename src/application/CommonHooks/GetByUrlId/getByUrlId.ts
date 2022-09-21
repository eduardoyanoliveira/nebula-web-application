function getByUrlId<T extends { id?: string }>(data: T[]){

    const urlStrings = window.location.toString().split('/');
    const id = urlStrings.at(-1);

    const item = data?.find(item => item.id === id);

    return { item };
};

export { getByUrlId };

