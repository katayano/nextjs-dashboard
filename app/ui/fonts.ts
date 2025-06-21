import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
// Luminanceフォントの400と700ウェイトを使える準備をする
// 700を設定しないと、700ウェイトのテキストが表示されない
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });