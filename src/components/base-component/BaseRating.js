import React from "react";
import { Flex, Rate } from "antd";

const BaseRating = (props) => {
  const { defaultRate } = props;
  return (
    <Flex gap="middle" vertical>
      <Rate defaultValue={defaultRate} />
    </Flex>
  );
};

export default BaseRating;
