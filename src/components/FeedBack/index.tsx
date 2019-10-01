import React from 'react';
import { nameForm } from "../../store/feedBack/feedBack.action";
import { connect } from "react-redux";
import FeedBackForm from "../Forms/FeedBackForm";

const FeedBack = (props: any) => {

  const onSubmit = (data: any) => {
    props.nameForm(data);
  };
  return (
    <>
      <FeedBackForm onSubmit={onSubmit} />
    </>
  )
};

const mapDispatchToProps = {
  nameForm
};

export default connect(null,mapDispatchToProps)(FeedBack)
