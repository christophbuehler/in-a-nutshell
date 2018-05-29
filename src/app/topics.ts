declare const topics: Topic[];

export function subTopics(topic: Topic) {
    const path = trimSlashes(`${topic.path}/${topic.title.toLocaleLowerCase()}`);
    const filtered = topics
        .filter(t => t.path.replace(/^\/|\/$/g, '') === path);
    return filtered;
    function trimSlashes(str) {
        return str
            .replace(/\/\//g, '/')
            .replace(/^\/|\/$/g, '');
    }
}

export interface Topic {
    title: string;
    path: string;
    abstract?: string;
    body?: string;
    complete?: number;
}
