"use client";
import React from "react";
import styled from "styled-components";
import { poppins , montserrat} from "@styles/fonts";
const Wrapper = styled.form`
    font-family: ${poppins.style.fontFamily};
  width: 700px;
  padding: 40px 32px;
    border-radius: 20px;
  background-color: #12111a;
  border: 1px solid #5d6c87;
   box-shadow:
    0px 30px 118px -10px rgba(255, 255, 255, 0.2),
    0px 20px 68px -20px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  background-color: #38425080;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: 2px solid #5f52ff;
  }
`;

const TextArea = styled.textarea`
  background-color:#38425080;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  height: 120px;
  resize: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: 2px solid #5f52ff;
  }
`;

const Label = styled.label`
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SubmitButton = styled.button`
  font-family: ${montserrat.style.fontFamily};
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #11101d;
  cursor: pointer;
  transition: 0.3s;
  align-self: flex-start;

  background-image: 
    linear-gradient(#11101d, #11101d), /* inner background */
    linear-gradient(90deg, #ff00d6, #ff4d00); /* border gradient */
  background-origin: border-box;
  background-clip: padding-box, border-box;

  &:hover {
    opacity: 0.9;
  }
`;

const ContactUsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Burada form məlumatlarını işləyə bilərsən
    console.log("Form submitted");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FlexRow>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>
      </FlexRow>

      <FlexRow>
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="Phone Number" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="Add Subject" />
        </FormGroup>
      </FlexRow>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Please enter your message..."
        />
      </FormGroup>

      <SubmitButton type="submit">Göndərin</SubmitButton>
    </Wrapper>
  );
};

export default ContactUsForm;
