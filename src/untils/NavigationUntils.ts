import { Connection } from 'graph-navigation-js';

export const getFirstConnection = (entryPoint: string) => {
    const connection = new Connection();
    connection.id = "continue";
    connection.stepTo = entryPoint
    return connection
}
