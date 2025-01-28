import { createStore } from 'vuex';

const store = createStore({
  state() {
    let storedMemories = [];
    try {
      const memoriesFromStorage = localStorage.getItem('memories');
      storedMemories = memoriesFromStorage ? JSON.parse(memoriesFromStorage) : [];
    } catch (error) {
      console.error('Error loading memories from localStorage:', error);
    }

    return {
      memories: storedMemories.length > 0
        ? storedMemories
        : [
            {
              id: "m1",
              image: "https://www.blackstreetstore.com/wp-content/uploads/2024/07/VinewoodPhuPhaMan2.jpg",
              title: "การท่องเที่ยวในภาคอีสาน",
              description: "ภูผาม่าน",
            },
            {
              id: "m2",
              image: "https://s.isanook.com/me/0/ud/1/8623/01.jpg",
              title: "การออกกำลังกาย",
              description: "เล่นฟุตบอล",
            },
            {
              id: "m3",
              image: "https://www.naturebiotec.com/wp-content/uploads/2020/06/1-7.jpg",
              title: "การนอน",
              description: "นอนไม่เกิน 5 ทุ่ม",
            },
            {
              id: "m4",
              image: "https://coop.hcu.ac.th/wp-content/uploads/2018/11/money-2724241_1280-840x567.jpg",
              title: "การใช้จ่ายเงิน",
              description: "เก็บออมเดือนละ 1,500",
            }
          ]
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory({ commit }, memoryData) {
      commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById: (state) => (memoryId) => {
      return state.memories.find((memory) => memory.id === memoryId);
    },
  },
});

export default store;
