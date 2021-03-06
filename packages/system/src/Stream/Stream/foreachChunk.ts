import type * as A from "../../Chunk"
import type * as T from "../_internal/effect"
import * as SK from "./../Sink"
import type { Stream } from "./definitions"
import { run_ } from "./run"

/**
 * Consumes all elements of the stream, passing them to the specified callback.
 */
export function foreachChunk_<R, R1, E, E1, O>(
  self: Stream<R, E, O>,
  f: (o: A.Chunk<O>) => T.Effect<R1, E1, any>
): T.Effect<R & R1, E | E1, void> {
  return run_(self, SK.foreachChunk(f))
}

/**
 * Consumes all elements of the stream, passing them to the specified callback.
 */
export function foreachChunk<R1, E1, O>(f: (o: A.Chunk<O>) => T.Effect<R1, E1, any>) {
  return <R, E>(self: Stream<R, E, O>) => run_(self, SK.foreachChunk(f))
}
