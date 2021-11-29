import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
  BlockId,
  Elements,
  End,
} from '../internal/methods';

import type { SlackElementDto } from '../internal/dto';
import type { ActionsElementBuilder } from '../types';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBuilder extends BlockId,
  End,
  Elements<ActionsElementBuilder> {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#actions
 * @@displayName Actions
 */

export class ActionsBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Actions,
      elements: getBuilderResults<SlackElementDto>(this.props.elements),
    });
  }
}

applyMixins(ActionsBuilder, [
  BlockId,
  End,
  Elements,
]);
