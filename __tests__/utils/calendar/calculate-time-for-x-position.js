import dayjs from "dayjs";
import { calculateTimeForXPosition } from "lib/utility/calendar";

describe("calculate time for x position", () => {
  it("calculates point in middle of timeline", () => {
    const canvasStart = dayjs("2018-01-01").valueOf();
    const canvasEnd = dayjs("2018-01-03").valueOf();
    const canvasWidthInPixels = 3000;

    const currentXPositionInPixels = canvasWidthInPixels / 2;

    const actual = calculateTimeForXPosition(
      canvasStart,
      canvasEnd,
      canvasWidthInPixels,
      currentXPositionInPixels
    );

    const expected = dayjs("2018-01-02").valueOf();

    expect(actual).toBe(expected);
  });

  it("calculates point in first quarter of timeline", () => {
    const canvasStart = dayjs("2018-01-01").valueOf();
    const canvasEnd = dayjs("2018-01-02").valueOf();
    const canvasWidthInPixels = 3000;

    const currentXPositionInPixels = canvasWidthInPixels / 4;

    const actual = calculateTimeForXPosition(
      canvasStart,
      canvasEnd,
      canvasWidthInPixels,
      currentXPositionInPixels
    );

    const expected = dayjs("2018-01-01").add(6, "hours").valueOf();

    expect(actual).toBe(expected);
  });

  it("calculates point in latter quarter of timeline", () => {
    const canvasStart = dayjs("2018-01-01").valueOf();
    const canvasEnd = dayjs("2018-01-02").valueOf();
    const canvasWidthInPixels = 3000;

    const currentXPositionInPixels = canvasWidthInPixels * 0.75;

    const actual = calculateTimeForXPosition(
      canvasStart,
      canvasEnd,
      canvasWidthInPixels,
      currentXPositionInPixels
    );

    const expected = dayjs("2018-01-01").add(18, "hours").valueOf();

    expect(actual).toBe(expected);
  });
});
