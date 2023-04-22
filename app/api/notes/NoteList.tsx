// フックを用いているため、Client Componentとして定義する
// クライアント側で実行される
"use client";
import { useSWR } from "swr";

import { Note, zNotes } from "./typs";

type Props = {
  initialState: Note[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const notes = zNotes.parse(data);
    return notes;
  });

const NoteList: React.FC<Props> = ({ initialState }) => {
  // クライアントサイドでのデータ取得
  const { data } = useSWR('api/notes');
};
