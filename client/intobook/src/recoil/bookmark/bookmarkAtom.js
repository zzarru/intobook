import { atom } from 'recoil';

// 블루투스 연결 상태
export const BluetoothAtom = atom({
    key: 'BluetoothAtom',
    default: true
});

// 북갈피 현재 상태
export const BookmarkStatusAtom = atom({
    key: 'BookmarkStatusAtom',
    default: true
});

export const BookmarkAtom = atom({
    key: 'BookmarkAtom',
    default: {
        bluetooth: false,
        bookmark: false,
    }
});