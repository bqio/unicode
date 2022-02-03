new Vue({
  el: "#app",
  data: {
    unifontVersion: "8.0.01",
    range: "",
    chars: []
  },
  computed: {
    rangeStart() {
      let rsp = this.range.split('-');
      return parseInt(rsp[0]);
    },
    rangeEnd() {
      let rsp = this.range.split('-');
      return parseInt(rsp[1]);
    }
  },
  methods: {
    convert() {

      if (this.rangeEnd <= this.rangeStart) {
        return;
      }

      this.chars = [];
      for (let i = this.rangeStart; i < this.rangeEnd; i++) {
        this.chars.push({
          code: i,
          char: String.fromCharCode(i),
        })
      }
    }
  }
});
