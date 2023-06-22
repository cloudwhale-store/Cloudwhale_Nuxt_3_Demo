import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAwardStore = defineStore('award', {
  state: () => ({ 
    gameTitle: '',
    studioName: '',
    description: '',
    image: '',
    date: undefined,
    number: -1,
    pdf: undefined,
  }),
  actions: {
    createAward(gameTitle, studioName, description, image) {
      // save the award details to store
      this.gameTitle = gameTitle;
      this.studioName = studioName;
      this.description = description;
      this.image = image;

      // Get next number from database
      // TODO: Replace number with databse query. For this demo it will be a random number
      this.number = Math.floor(Math.random() * 1000);

      // Set the date to today
      this.date = new Date();

      // send api request to create award

      // await and save the pdf to store
    },
    updateAward(gameTitle, studioName, description, image) {

    },
  },
})