interface fieldDetailsProps {
  xFieldsCount: number;
  yFieldsCount: number;
  bombsCount: number;
}

export function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getFieldDetails(skillLevel: string) {
  const fieldDetails: fieldDetailsProps = {
    xFieldsCount: 0,
    yFieldsCount: 0,
    bombsCount: 0,
  };

  switch (skillLevel) {
    case "beginner":
      fieldDetails.xFieldsCount = 8;
      fieldDetails.yFieldsCount = 8;
      fieldDetails.bombsCount = 10;
      break;
    case "intermediate":
      fieldDetails.xFieldsCount = 16;
      fieldDetails.yFieldsCount = 16;
      fieldDetails.bombsCount = 40;
      break;
    case "expert":
      fieldDetails.xFieldsCount = 30;
      fieldDetails.yFieldsCount = 16;
      fieldDetails.bombsCount = 99;
      break;
  }
  return fieldDetails;
}
