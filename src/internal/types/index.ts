import type {
  ButtonBuilder,
  ChannelMultiSelectBuilder,
  ChannelSelectBuilder,
  CheckboxesBuilder,
  ConversationMultiSelectBuilder,
  ConversationSelectBuilder,
  DatePickerBuilder,
  ExternalMultiSelectBuilder,
  ExternalSelectBuilder,
  ImgBuilder,
  OverflowMenuBuilder,
  RadioButtonsBuilder,
  StaticMultiSelectBuilder,
  StaticSelectBuilder,
  TextInputBuilder,
  TimePickerBuilder,
  UserMultiSelectBuilder,
  UserSelectBuilder,
} from '../../elements';
import type {
  ActionsBuilder,
  ContextBuilder,
  DividerBuilder,
  FileBuilder,
  HeaderBuilder,
  ImageBuilder,
  InputBuilder,
  SectionBuilder,
} from '../../blocks';

export type ActionsElementBuilder =
  ButtonBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalSelectBuilder
  | OverflowMenuBuilder
  | RadioButtonsBuilder
  | StaticSelectBuilder
  | TimePickerBuilder
  | UserSelectBuilder;

export type SectionElementBuilder =
  ButtonBuilder
  | ChannelMultiSelectBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationMultiSelectBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalMultiSelectBuilder
  | ExternalSelectBuilder
  | ImgBuilder
  | OverflowMenuBuilder
  | RadioButtonsBuilder
  | StaticMultiSelectBuilder
  | StaticSelectBuilder
  | TimePickerBuilder
  | UserMultiSelectBuilder
  | UserSelectBuilder;

export type InputElementBuilder =
  | ChannelMultiSelectBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationMultiSelectBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalMultiSelectBuilder
  | ExternalSelectBuilder
  | RadioButtonsBuilder
  | StaticMultiSelectBuilder
  | StaticSelectBuilder
  | TextInputBuilder
  | TimePickerBuilder
  | UserMultiSelectBuilder
  | UserSelectBuilder;

export type ContextElement = ImgBuilder | string;

export type BlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | FileBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder;

export type ViewBlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder;

export type FilterString = 'im' | 'mpim' | 'private' | 'public';

// Internal use only

export interface ObjectLiteral {
  [key: string]: any;
}

export type Ctor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AbstractCtor<T> = { prototype: T };

export type Undefinable<T> = T | undefined;

export type Settable<T> = Undefinable<T>;

export type UndefinableArray<T> = Undefinable<T>[];

export type Appendable<T> = UndefinableArray<T | UndefinableArray<T>>;

export type Fn<T, R> = (arg: T) => R;

export type BlockBuilderReturnableFn<T> = Fn<T, BlockBuilder[]>;

export type StringReturnableFn<T> = Fn<T, string>;

