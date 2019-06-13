import { EntityCollection, EntityCollectionReducerMethods, EntityAction, EntityDefinition } from "ngrx-data";


interface CustomEntityCollection extends EntityCollection {
    page: any,
    includes: string[]
}

export class CustomEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
    constructor(entityName: string, definition: EntityDefinition<T>) {
        super(entityName, definition);
    }

    /**
     * Customizando action de queryAcllSuccess para incluir paginação 
     * @param collection 
     * @param action 
     */
    protected queryAllSuccess(
        collection: EntityCollection<T>,
        action: EntityAction<T[]>
    ): CustomEntityCollection {
        const data = this.extractData(action); 
        const mergeStrategy = this.extractMergeStrategy(action);
        return {
            ...this.entityChangeTracker.mergeQueryResults(
                (action.payload.data as any).data,
                collection,
                mergeStrategy
            ),
            loading: false,
            page: (action.payload.data as any).page,
            includes: (action.payload.data as any).includes
        };
    }
}