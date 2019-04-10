import axios from 'axios';

export default {
  data() {
    return {
      data: {
        loading: false,
        list: [],
      },
    };
  },
  methods: {
    loadData(url) {
      this.data.loading = true;
      axios.get(url).then(res => {
        this.data = {
          loading: false,
          list: res.data.results,
        };
      });
    },
  },
};
