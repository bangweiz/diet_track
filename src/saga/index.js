import { fork } from "redux-saga/effects";
import food from "./food";

export default function*() {
  yield fork(food);
}