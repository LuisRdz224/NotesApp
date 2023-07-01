/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Nota } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotaUpdateFormInputValues = {
    note?: string;
};
export declare type NotaUpdateFormValidationValues = {
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotaUpdateFormOverridesProps = {
    NotaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotaUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nota?: Nota;
    onSubmit?: (fields: NotaUpdateFormInputValues) => NotaUpdateFormInputValues;
    onSuccess?: (fields: NotaUpdateFormInputValues) => void;
    onError?: (fields: NotaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotaUpdateFormInputValues) => NotaUpdateFormInputValues;
    onValidate?: NotaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotaUpdateForm(props: NotaUpdateFormProps): React.ReactElement;
