import { Stack } from "../state/stack";

export enum MergeResult {
  Success,
  ToStackIsFull,
  FromStackIsEmpty,
  ColorMisMatch,
  UnknownError
}

const mergeStacks = (from: Stack, to: Stack) => {
  if (to.isFull()) return MergeResult.ToStackIsFull;
  if (from.isEmpty()) return MergeResult.FromStackIsEmpty;
  if (!to.isEmpty() && (from.peek() != to.peek())) return MergeResult.ColorMisMatch;
  const colorToTransfer = from.peek();
  from.pop();
  if (colorToTransfer) {
    to.push(colorToTransfer);
  } else {
    return MergeResult.UnknownError;
  }
  mergeStacks(from, to);
  return MergeResult.Success;
}

export default mergeStacks;