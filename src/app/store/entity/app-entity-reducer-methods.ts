import { EntityCollectionReducerMethods, EntityDefinition, EntityCollection, EntityAction, EntityCollectionReducerMethodsFactory, EntityDefinitionService, EntityCollectionReducerMethodMap } from "ngrx-data";
import { Injectable } from "@angular/core";

interface CustomEntityCollection extends EntityCollection {
    page: any,
    includes: string[]
}

class CustomEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
    constructor(entityName: string, definition: EntityDefinition<T>) {
        super(entityName, definition);
    }

    protected queryAllSuccess(
        collection: EntityCollection<T>,
        action: EntityAction<T[]>
    ): CustomEntityCollection {
        const data = this.extractData(action); 
        const mergeStrategy = this.extractMergeStrategy(action);
        console.log(action);
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

@Injectable()
export class AppEntityCollectionReducerMethodsFactory extends EntityCollectionReducerMethodsFactory {
    constructor(public appEntityDefinitionService: EntityDefinitionService) {
        super(appEntityDefinitionService);
    }

    create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
        let definition;
        let methodClass;


        definition = this.appEntityDefinitionService.getDefinition<T>(entityName);
        methodClass = new CustomEntityCollectionReducerMethods<T>(entityName, definition);
        return methodClass.methods;
    }
}
