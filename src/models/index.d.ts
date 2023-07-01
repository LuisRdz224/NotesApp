import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNota = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Nota, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly note: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNota = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Nota, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly note: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Nota = LazyLoading extends LazyLoadingDisabled ? EagerNota : LazyNota

export declare const Nota: (new (init: ModelInit<Nota>) => Nota) & {
  copyOf(source: Nota, mutator: (draft: MutableModel<Nota>) => MutableModel<Nota> | void): Nota;
}