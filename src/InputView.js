import { Console } from "@woowacourse/mission-utils";
import { LOTTO_INPUT_QUERY } from "./constants.js";

export const lottoInputView = {
  async readPrice() {
    const input = await Console.readLineAsync(LOTTO_INPUT_QUERY.PRICE);

    return input.trim();
  },
};
