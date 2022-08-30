<template>
  <div class="form">
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="computer.cpu"
          is-link
          readonly
          name="cpu"
          label="CPU型号"
          placeholder="点击选择CPU型号"
          @click="showCpuPicker = true"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.memorry"
          is-link
          readonly
          name="memorry"
          label="内存"
          placeholder="请选择内存"
          @click="showMemorryPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.mother_board"
          is-link
          readonly
          name="mother_board"
          label="主板"
          placeholder="请选择主板品牌及型号"
          @click="showMotherBoardPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.gpu_card"
          is-link
          readonly
          name="gpu"
          label="显卡"
          placeholder="请选择显卡品牌及型号"
          @click="showGpuPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.hard_driver"
          is-link
          readonly
          name="hard_driver"
          label="硬盘"
          placeholder="请选择银盘型号及容量"
          @click="showHardDriverPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.power"
          is-link
          readonly
          name="power"
          label="电源"
          placeholder="请选择电源规格"
          @click="showPowerPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.case"
          is-link
          readonly
          name="case"
          label="机箱"
          placeholder="请选择机箱型号"
          @click="showCasePicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.cpu_fan"
          is-link
          readonly
          name="cpu_fan"
          label="cpu散热器"
          placeholder="请选择CPU散热器"
          @click="showCpuFanPicker = true"
        ></van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="computer.case_fan"
          is-link
          readonly
          name="case_fan"
          label="机箱风扇"
          placeholder="请选择机箱风扇"
          @click="showCaseFanPicker = true"
        ></van-field>
      </van-cell-group>
      <van-popup v-model:show="showCpuPicker" position="bottom">
        <van-picker
          :columns="cpus"
          @confirm="onCpuConfirm"
          @cancel="showCpuPicker = false"
        />
      </van-popup>
      <van-popup v-model:show="showMemorryPicker" position="bottom">
        <van-picker
          :columns="memorries"
          @confirm="onMemorryConfirm"
          @cancel="showMemorryPicker = false"
        />
      </van-popup>
      <van-popup v-model:show="showMotherBoardPicker" position="bottom">
        <van-picker
          :columns="mother_boards"
          @confirm="onMotherBoardConfirm"
          @cancel="showMotherBoardPicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showGpuPicker" position="bottom">
        <van-picker
          :columns="gpus"
          @confirm="onGpuConfirm"
          @cancel="showGpuPicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showHardDriverPicker" position="bottom">
        <van-picker
          :columns="hard_drivers"
          @confirm="onHardDriverConfirm"
          @cancel="showHardDriverPicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showPowerPicker" position="bottom">
        <van-picker
          :columns="powers"
          @confirm="onPowerConfirm"
          @cancel="showPowerPicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showCasePicker" position="bottom">
        <van-picker
          :columns="cases"
          @confirm="onCaseConfirm"
          @cancel="showCasePicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showCpuFanPicker" position="bottom">
        <van-picker
          :columns="cpu_fans"
          @confirm="onCpuFanConfirm"
          @cancel="showCpuFanPicker = false"
        ></van-picker>
      </van-popup>
      <van-popup v-model:show="showCaseFanPicker" position="bottom">
        <van-picker
          :columns="case_fans"
          @confirm="onCaseFanConfirm"
          @cancel="showCaseFanPicker = false"
        ></van-picker>
      </van-popup>
      <!-- <van-cell-group> -->

      <!-- </van-cell-group> -->
      <van-cell-group>
        <van-button round block type="primary" size="large" native-type="submit">
          提交
        </van-button>
      </van-cell-group>
    </van-form>
    <van-overlay :show="loading" z-index="99" :custom-style="overlay">
      <van-loading type="spinner" color="#1989fa" />
    </van-overlay>
    <van-field v-model="total" label="累计总价："></van-field>
  </div>
</template>

<script setup>
import { Notify, Toast } from "vant";
import { reactive, ref, watch, onMounted } from "vue";
import * as tableData from "./price.json";
console.log(tableData);

const computer = reactive({
  cpu: "",
  memorry: "",
  mother_board: "",
  cpu_fan: "",
  case_fan: "",
  power: "",
  hard_driver: "",
  gpu_card: "",
  case: "",
});
const configer = reactive([]);
const total = ref(0);
const loading = ref(false);
const showCpuPicker = ref(false);
const showMemorryPicker = ref(false);
const showMotherBoardPicker = ref(false);
const showGpuPicker = ref(false);
const showHardDriverPicker = ref(false);
const showPowerPicker = ref(false);
const showCasePicker = ref(false);
const showCpuFanPicker = ref(false);
const showCaseFanPicker = ref(false);
const overlay = reactive({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const cpus = reactive([
  "R5 5600X",
  "R7 5800X",
  "R9 5900X",
  "i3 12100F",
  "i5 12400F",
  "i5 12600KF",
  "i7 12700F",
  "i7 12700KF",
  "i9 12900K",
  "i9 12900KS",
]);
const memorries = reactive([
  "3000 MHz",
  "3000 MHz RGB",
  "3200 MHz",
  "3200 MHz RGB",
  "3600 MHz",
  "3600 MHz RGB",
  "4000 MHz",
  "4000 MHz RGB",
]);
const mother_boards = reactive([
  "B450M 迫击炮",
  "b450i gamming AC",
  "ROG B450I gamming",
  "ROG X470i",
  "MSI B550I edge",
  "ROG B550i gamming",
  "ROG X570i gamming",
  "MSI B550M 迫击炮",
  "MSI B550 edge 刀锋",
  "ASUS B550M 重炮手",
  "ROG B550 吹雪",
  "H610M",
  "B660M 迫击炮",
  "B660M 重炮手",
  "MSI Z690 刀锋",
  "MSI Z690 暗黑",
  "ROG B660 吹雪",
  "ROG Z690 吹雪",
]);
const gpus = reactive([
  "RTX 3060",
  "RTX 3060ti",
  "RTX 3070",
  "RTX 3070ti",
  "RTX 3080 10g",
  "RTX 3080 12g",
  "RTX 3080ti",
  "RTX 3090",
  "RTX 3090ti",
  "RX 6600XT",
  "RX 6650XT",
  "RX 6700XT",
  "RX 6750XT",
  "RX 6800XT",
  "RX 6850XT",
  "RX 6900XT",
  "RX 6950XT",
]);
const hard_drivers = reactive([
  "SN 550 500g",
  "SN 550 1t",
  "SN 750 500g",
  "SN 750 1t",
  "RD20 500g",
  "RD20 1t",
  "SAMSUNG 980 1t",
  "SAMSUNG 980 PRO 1t",
]);
const powers = reactive([
  "leadex G 550W",
  "leadex G 650W",
  "leadex G 750W",
  "leadex G 850W",
  "leadex G 1000W",
]);
const cases = reactive([
  "NZXT H210i",
  "NZXT H400",
  "Pure Base 500 白色",
  "普力魔 MG210",
  "普力魔 MG410",
  "屌丝博 D30",
]);
const cpu_fans = reactive([
  "利民 PA120 单塔单风扇",
  "利民 PA120 单塔双风扇",
  "利民 PA120 双塔双风扇",
  "利民 Magic Frozen 240 水冷",
  "NZXT Z52 240",
  "九州风神 水元素 240",
  "EK 240 ARGB",
]);
const case_fans = reactive([
  "利民C12 * 3",
  "ARCTIC F12 * 3",
  "ARCTIC P12 * 3",
  "猫头鹰 P12 * 3",
  "猫头鹰 F12 * 3",
  "Cooling Master 12cm ARGB * 3",
]);
const onSubmit = (values) => {
  let flag = true;
  // for (let key in values) {
  //   if (!values[key]) {
  //     flag = false;
  //     Notify({
  //       type: "danger",
  //       message: "所有选项均为必选项",
  //     });
  //   }
  // }
  if (!flag) return;
  // 计算总价
  calculateResults(values);
  // loading.value = true;
  // setTimeout(() => {
  //   loading.value = false;
  // }, 1000);
  // console.log(values);
};
const onCpuConfirm = (values) => {
  computer.cpu = values;
  showCpuPicker.value = false;
};
const onMemorryConfirm = (values) => {
  computer.memorry = values;
  showMemorryPicker.value = false;
};
const onMotherBoardConfirm = (values) => {
  computer.mother_board = values;
  showMotherBoardPicker.value = false;
};
const onGpuConfirm = (values) => {
  computer.gpu_card = values;
  showGpuPicker.value = false;
};
const onHardDriverConfirm = (values) => {
  computer.hard_driver = values;
  showHardDriverPicker.value = false;
};
const onPowerConfirm = (values) => {
  computer.power = values;
  showPowerPicker.value = false;
};
const onCaseConfirm = (values) => {
  computer.case = values;
  showCasePicker.value = false;
};
const onCpuFanConfirm = (values) => {
  computer.cpu_fan = values;
  showCpuFanPicker.value = false;
};
const onCaseFanConfirm = (values) => {
  computer.case_fan = values;
  showCaseFanPicker.value = false;
};
const calculateResults = (values) => {
  debugger;
  for (let key in computer) {
    configer.push(
      tableData.find((item) => {
        return item.name === key;
      })
    );
  }
  console.log(configer);
};
</script>

<style scoped lang="less"></style>
