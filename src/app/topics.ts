declare const topics: Topic[];

export function subTopics(topic: Topic) {
    const path = trimSlashes(`${topic.path}/${topic.title.toLocaleLowerCase().replace(/ /g, '-')}`);
    const filtered = topics
        .filter(t => t.path.replace(/^\/|\/$/g, '') === path);
    return filtered;
    function trimSlashes(str) {
        return str
            .replace(/\/\//g, '/')
            .replace(/^\/|\/$/g, '');
    }
}

export function childTopicCount(topic: Topic): number {
    return subTopics(topic)
        .reduce((count, topic) => count + 1 + childTopicCount(topic), 1);
}

export interface Topic {
    title: string;
    path: string;
    body?: string;
    complete?: number;
}
