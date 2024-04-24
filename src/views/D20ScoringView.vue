<template>
  <!-- <div>{{ record_detail }}</div> -->
  <div class="row justify-content-center mb-3" v-if="!record_detail?.record_id">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Records</h5>
          <form @submit.prevent="createRecord()">
            <div class="mb-3">
              <label class="form-label">Record Name</label>

              <div class="input-group mb-2">
                <input
                  type="text"
                  v-model="record_detail.record_name"
                  class="form-control"
                  placeholder="Record Name"
                  required
                />
                <button class="btn btn-success" type="submit">Add</button>
              </div>
            </div>
          </form>
          <form @submit.prevent="importRecord()">
            <div class="mb-3">
              <label class="form-label">Json Import</label>

              <div class="input-group mb-2">
                <textarea
                  rows="5"
                  style="resize: none"
                  v-model="record_imp"
                  class="form-control"
                  placeholder="Json Import"
                  required
                />
                <button class="btn btn-success" type="submit">Add</button>
              </div>
            </div>
          </form>

          <table class="table table-light">
            <thead class="thead-light">
              <tr>
                <th width="1">#</th>
                <th>Name</th>
                <th width="1">Go</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rl, idx) in records_list" :key="rl.record_id">
                <td>{{ idx + 1 }}</td>
                <td>{{ rl.record_name }}</td>
                <td>
                  <div class="d-grid gap-2">
                    <button
                      type="button"
                      @click="load_data(rl.record_id)"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center g-3 mb-3" v-else>
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title me-auto">Records</h5>
          <div class="d-inline">
            <button class="btn btn-warning me-2" @click="back()" type="button">
              Back
            </button>
            <button
              class="btn btn-info"
              @click="hidePlayer = !hidePlayer"
              type="button"
            >
              {{ hidePlayer ? "Show" : "Hide" }}
            </button>
          </div>
        </div>
        <div class="card-body" v-show="!hidePlayer">
          <div class="d-grid mb-2">
            <button class="btn btn-primary" @click="copyJson()" type="button">
              Json Copy
            </button>
          </div>

          <form @submit.prevent="createPlayer()">
            <div class="mb-3">
              <label class="form-label">Add Player Name</label>

              <div class="input-group mb-2">
                <input
                  type="text"
                  v-model="ip_player"
                  class="form-control"
                  placeholder="Player Name"
                  required
                />
                <button class="btn btn-success" type="submit">Add</button>
              </div>
            </div>
          </form>
          <table class="table table-light">
            <thead class="thead-light">
              <tr>
                <th width="1" class="text-center">#</th>
                <th>Name</th>
                <th width="1" class="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in record_detail.players" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ p }}</td>
                <td>
                  <button
                    type="button"
                    @click="deletePlayer(p)"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <div class="me-auto">Dice Stat</div>

          <download-csv :data="record_detail.stats" class="btn justify-end">
            Download CSV
          </download-csv>
        </div>

        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Select Player</label>
            <div class="form-selectgroup">
              <label
                class="form-selectgroup-item"
                v-for="(p, idx) in record_detail.players"
                :key="idx"
              >
                <input
                  type="radio"
                  v-model="playerSelect"
                  :value="p"
                  class="form-selectgroup-input"
                />
                <span class="form-selectgroup-label">{{ p }}</span>
              </label>
            </div>
          </div>
          <div class="mb-3">
            <div class="row row-cols-5 g-3">
              <div v-for="i in 20" class="col text-center" :key="i">
                <button class="btn bd" @click="addScore(i)">{{ i }}</button>
              </div>
            </div>
          </div>

          <table class="table table-light">
            <thead class="thead-light">
              <tr>
                <th width="1" class="text-center">#</th>
                <th>name</th>
                <th width="2">Score</th>
                <th width="1" class="text-center">ลบ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s, idx) in stats_rev" :key="idx">
                <td>{{ stats_rev.length - idx }}</td>
                <td>{{ s.player }}</td>
                <td class="text-end">{{ s.score }}</td>
                <td>
                  <button
                    type="button"
                    @click="deleteScore(stats_rev.length - idx - 1)"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      records_list: [],
      record_detail: {
        record_id: "",
        record_name: "",
        players: [],
        stats: [],
      },
      ip_player: "",
      playerSelect: "",
      hidePlayer: true,
      record_imp: "",
    };
  },
  computed: {
    stats_rev() {
      let dat = [...this.record_detail.stats];
      return dat.reverse();
    },
  },
  mounted() {
    let rec_list = JSON.parse(localStorage.getItem("records_list"));
    // console.table(rec_list);
    if (rec_list != null) this.records_list = rec_list;
  },
  methods: {
    createRecord() {
      this.record_detail.record_id = this.createRandomString(8);
      this.record_detail.players = [];
      this.record_detail.stats = [];
      this.records_list.push({
        record_id: this.record_detail.record_id,
        record_name: this.record_detail.record_name,
      });
      localStorage.setItem("records_list", JSON.stringify(this.records_list));
      localStorage.setItem(
        `record_detail_${this.record_detail.record_id}`,
        JSON.stringify(this.record_detail)
      );
    },
    importRecord() {
      try {
        let dat = JSON.parse(this.record_imp);
        dat.record_id = this.createRandomString(8);
        this.records_list.push({
          record_id: dat.record_id,
          record_name: dat.record_name,
        });
        localStorage.setItem("records_list", JSON.stringify(this.records_list));
        localStorage.setItem(
          `record_detail_${dat.record_id}`,
          JSON.stringify(dat)
        );
        this.record_imp = "";
      } catch (ex) {
        this.record_imp = "";
      }
    },
    load_data(record_id) {
      let rd = JSON.parse(localStorage.getItem(`record_detail_${record_id}`));

      if (rd != null) {
        this.record_detail = rd;
      } else {
        const idx = this.records_list.findIndex(
          (e) => e.record_id == record_id
        );
        this.records_list.splice(idx, 1);
        localStorage.setItem("records_list", JSON.stringify(this.records_list));
      }
    },
    createPlayer() {
      if (this.record_detail.players.includes(this.ip_player)) return;
      this.record_detail.players.push(this.ip_player);
      this.ip_player = "";
      localStorage.setItem(
        `record_detail_${this.record_detail.record_id}`,
        JSON.stringify(this.record_detail)
      );
    },
    deletePlayer(player) {
      const idx = this.record_detail.players.findIndex((e) => e == player);
      this.record_detail.players.splice(idx, 1);
      localStorage.setItem(
        `record_detail_${this.record_detail.record_id}`,
        JSON.stringify(this.record_detail)
      );
    },
    addScore(i) {
      if (this.playerSelect != "") {
        this.record_detail.stats.push({
          player: this.playerSelect,
          score: i,
        });
        localStorage.setItem(
          `record_detail_${this.record_detail.record_id}`,
          JSON.stringify(this.record_detail)
        );
      }
    },
    deleteScore(idx) {
      this.record_detail.stats.splice(idx, 1);
      localStorage.setItem(
        `record_detail_${this.record_detail.record_id}`,
        JSON.stringify(this.record_detail)
      );
    },
    copyJson() {
      navigator.clipboard.writeText(JSON.stringify(this.record_detail));
    },
    back() {
      this.record_detail = {
        record_id: "",
        record_name: "",
        players: [],
        stats: [],
      };
    },
    createRandomString(length) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const randomArray = new Uint8Array(length);
      crypto.getRandomValues(randomArray);
      randomArray.forEach((number) => {
        result += chars[number % chars.length];
      });
      return result;
    },
  },
};
</script>

<style>
.bd {
  width: 50px;
  height: 50px;
}
</style>
