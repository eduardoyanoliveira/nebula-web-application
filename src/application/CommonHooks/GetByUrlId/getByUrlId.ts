function getByUrlId<T extends { id?: string }>(data: T[]){

    const urlStrings = window.location.toString().split('/');
    const id = urlStrings.at(-1)

    const subject = data?.find(item => item.id === id);

    return { subject };
};

export { getByUrlId };

