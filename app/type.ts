import { z } from "zod";

// APIやDBから取得した値の形式を定義する

// regex 正規表現
// 3つの数字をドットで区切ったバージョン番号の形式にマッチする
export const zVersion = z.string().regex(/^\d+\.\d+\.\d+$/);
export const zSettings = z.object({
  version: zVersion,
  faq: z.string(), // FAQ
  tos: z.string(), // Terms of Service 利用規約
});
export type Setting = z.infer<typeof zSettings>;
