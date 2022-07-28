let list = [
    {
        id: "1",
        question: "학창시절에 주로 뭐할 때가 제일 좋았어?",
        img_A: "/img/image 1.png",
        ans_A: "난 친구들이랑 함께 있는게 제일 좋았지!",
        next_A: "2A",
        img_B: "/img/image 2.png",
        ans_B: "혼자 인터넷이나 게임하는게 좋았어",
        next_B: "2B",
        cpr: "사진 출처: 구글, 김비모 유튜브"
    },
    {
        id: "2A",
        question: "친구들하고 뭐하고 놀때 가장 좋았어?",
        img_A: "./img/image 3.png",
        ans_A: "친구들이랑 운동하는게 최고였지!",
        next_A: "3A",
        img_B: "./img/image 4.png",
        ans_B: "친구들하고 매점 털어줘야 인지상정!",
        next_B: "3B",
        cpr: "사진 출처: 구글, 김비모 유튜브"
    },
    {
        id: "2B",
        question: "어떤 게임이 제일 재미있었어?",
        img_A: "./img/image 18.png",
        ans_A: "모바일 게임이 좋지",
        next_A: "3C",
        img_B: "./img/image 19.png",
        ans_B: "PC게임이 최고지!",
        next_B: "3D",
        cpr: "사진 출처: 구글"
    },
    {
        id: "3A",
        question: "그 때 내가 주로 입던 바지는?",
        img_A: "./img/image 5.png",
        ans_A: "카파, 험멜 스러운 바지",
        next_A: "4A",
        img_B: "./img/image 6.png",
        ans_B: "곰팡이, 돌청 바지",
        next_B: "4A",
        cpr: "사진 출처: 에펨코리아, 더쿠"
    },
    {
        id: "3B",
        question: "주로 어느 시간대에 매점에 갔어?",
        img_A: "./img/image 39.png",
        ans_A: "등교하자마자 아침으로 매점 가야지",
        next_A: "4B",
        img_B: "./img/image 38.png",
        ans_B: "점심먹고 한번 더 먹어줘야지",
        next_B: "4B",
        cpr: "사진 출처: 구글"
    },
    {
        id: "3C",
        question: "어떤 게임을 제일 즐겨 했어?",
        img_A: "./img/image 20.png",
        ans_A: "탬플런같은 달리기게임!",
        next_A: "4C",
        img_B: "./img/image 21.png",
        ans_B: "전국민게임 애니팡!",
        next_B: "4C",
        cpr: "사진 출처: 구글"
    },
    {
        id: "3D",
        question: "둘 중 어떤 게임을 제일 즐겨했어?",
        img_A: "./img/image 26.png",
        ans_A: "전투게임이 좋아",
        next_A: "4D",
        img_B: "./img/image 27.png",
        ans_B: "후레쉬게임이 좋아",
        next_B: "4E",
        cpr: "사진 출처: 구글"
    },

    {
        id: "4A",
        question: "내 친한 친구들이 주로 쓰던 아이템은?",
        img_A: "./img/image 7.png",
        ans_A: "돼지코 가방",
        next_A: "5A",
        img_B: "./img/image 8.png",
        ans_B: "노스페이스 패딩",
        next_B: "5B",
        cpr: "사진 출처: 썬도그 티스토리"
    },
    {
        id: "4B",
        question: "매점에 가서 내가 고른 메뉴는?",
        img_A: "./img/image 11.png",
        ans_A: "나눠먹기 싫어! 혼자 빵 다 먹을거야",
        next_A: "5C",
        img_B: "./img/image 12.png",
        ans_B: "나눠먹기 좋은 스낵류가 좋지~",
        next_B: "5D",
        cpr: "사진 출처: 구글"
    },
    {
        id: "4C",
        question: "모바일 게임에 현질해본적 있어?",
        img_A: "./img/image 22.png",
        ans_A: "절대 안해! 돈없어!",
        next_A: "5E",
        img_B: "./img/image 23.png",
        ans_B: "그럼~ 해본적 있지!",
        next_B: "5E",
        cpr: "사진 출처: 구글"
    },
    {
        id: "4D",
        question: "내가 주로 하던 게임 장르는?",
        img_A: "./img/image 28.png",
        ans_A: "FPS게임",
        next_A: "5F",
        img_B: "./img/image 40.png",
        ans_B: "RPG 게임",
        next_B: "5G",
        cpr: "사진 출처: 구글, 다음뉴스"
    },
    {
        id: "4E",
        question: "내가 주로 사람들과 소통하던 곳은?",
        img_A: "./img/image 34.png",
        ans_A: "싸이월드",
        next_A: "5H",
        img_B: "./img/image 35.png",
        ans_B: "퍼피레드",
        next_B: "5H",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5A",
        question: "하교 후에 주로 내가 하던 일은?",
        img_A: "./img/image 9.png",
        ans_A: "사진 보정해서 싸이월드에 사진 올리기",
        next_A: "A",
        img_B: "./img/image 10.png",
        ans_B: "애니팡으로 친구들과 순위배틀",
        next_B: "B",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5B",
        question: "하교 후에 주로 내가 하던 일은?",
        img_A: "./img/image 9.png",
        ans_A: "사진 보정해서 싸이월드에 사진 올리기",
        next_A: "A",
        img_B: "./img/image 10.png",
        ans_B: "애니팡으로 친구들과 순위배틀",
        next_B: "A",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5C",
        question: "무슨 빵을 먹었을까?",
        img_A: "./img/image 14.png",
        ans_A: "기름이 좔좔 치즈가 쭉쭉 맛스타",
        next_A: "C",
        img_B: "./img/image 15.png",
        ans_B: "매콤달달한 핫소세지치아바타",
        next_B: "C",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5D",
        question: "무슨 간식을 먹었을까?",
        img_A: "./img/image 16.png",
        ans_A: "바삭바삭 짭쪼름한 과자류",
        next_A: "D",
        img_B: "./img/image 17.png",
        ans_B: "딱딱해서 오래먹을 수 있는 젤리류",
        next_B: "E",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5E",
        question: "둘 중 어떤 게임을 제일 즐겨했어?",
        img_A: "./img/image 24.png",
        ans_A: "바운스볼",
        next_A: "F",
        img_B: "./img/image 25.png",
        ans_B: "마인크래프트PE",
        next_B: "G",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5F",
        question: "내가 좋아하던 게임은?",
        img_A: "./img/image 30.png",
        ans_A: "카운터스트라이크",
        next_A: "H",
        img_B: "./img/image 31.png",
        ans_B: "써든어택",
        next_B: "I",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5G",
        question: "내가 좋아하던 게임은?",
        img_A: "./img/image 32.png",
        ans_A: "메이플스토리",
        next_A: "J",
        img_B: "./img/image 33.png",
        ans_B: "던전앤파이터",
        next_B: "K",
        cpr: "사진 출처: 구글"
    },
    {
        id: "5H",
        question: "내가 좋아하던 게임은?",
        img_A: "./img/image 36.png",
        ans_A: "파니룸",
        next_A: "L",
        img_B: "./img/image 37.png",
        ans_B: "동물농장 꾸미기",
        next_B: "L",
        cpr: "사진 출처: 성공한 펭귄 덕후가되자, 구글"
    },
];

export function getLists() {
    return list;
}

export function getList(id) {
    return list.find((list) => list.id === id);
}

export function getNext(nextId) {
    return list.find((list) => list.id === nextId);
}