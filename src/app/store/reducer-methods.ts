import { Injectable } from "@angular/core";

import { EntityCollectionReducerMethodsFactory, EntityDefinitionService, EntityCollectionReducerMethodMap } from "ngrx-data";
import { CustomEntityCollectionReducerMethods } from "./custom-entity-collection-reducer-methods";

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