import styled, { css } from "styled-components";

export const Containers = styled.div`
  display: grid;
  grid-template-areas:
    "nav header header"
    "nav content content";
  grid-template-columns: 70px auto;
  grid-template-rows: auto auto;
  grid-gap: 0px 10px;
  background-color: #f9faff;

  input:focus {
    outline: none;
  }

  p {
    margin: 0;
  }
`;

export const DashboardWrapper = styled.div`
  grid-area: content;
  background-color: #f9faff;
  margin-top: 70px;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  margin-right: 16px;

  .title-dashboard {
    font-size: 24px;
    margin-bottom: 10px;
    color: #405169;
  }
`;

export const Content = css`
  .content-table {
    border-collapse: collapse;
    font-size: 16px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    width: 100%;
    color: #405169;
    background-color: #fff;
  }

  .content-table thead tr {
    background-color: #dde9fb;
    color: #ffffff;
    text-align: left;
    font-weight: 500;
    color: var(--dark);
  }

  .content-table th,
  .content-table td {
    padding: 12px 10px;
  }

  .content-table td {
    padding: 10px 10px;
  }

  .content-table tbody tr {
    border: 1px solid #dde9fb;
    border-left: none;
    border-bottom: none;
  }

  .content-table tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const CenterPosition = css`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 50px 50px;
  min-width: 32%;
  max-width: 100%;
`;

export const Form = styled.div`
  ${CenterPosition}
  p {
    margin: 0;
  }
  .logo {
    text-align: center;
    width: 71px;
    height: 71px;
    margin: 10px auto;
    border: 1px solid #ffffff;
    background: #4c60eb;
    font-size: 15px;
    color: #fff;
    border-radius: 50px;
    line-height: 71px;
  }

  a {
    text-decoration: none;
  }

  .sign-in-title {
    font-weight: 300;
    font-size: 34px;
    text-align: left;
    margin-bottom: 5px;
    color: #405169;
  }
  .proceed {
    font-size: 15px;
    color: rgba(64, 81, 105, 0.5);
  }

  form {
    padding: 10px 5px;
    font-size: 12px;
  }

  .mail,
  .password-title {
    margin: 10px 0;
  }

  .mail {
    margin-top: 40px;
  }

  .address,
  .password,
  .gender,
  .lastname,
  .firstname,
  .confirm-password {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    color: #405169;
  }

  .password-title {
    display: flex;
    justify-content: space-between;
  }

  .forgot {
    font-size: 15px;
    color: hsla(215.1219512195122, 24.2603550295858%, 33.13725490196078%, 0.5);
  }

  input,
  button,
  select {
    width: 100%;
    height: 45px;
    outline: none;
    background: rgba(76, 141, 235, 0.10077);
    border: 1px solid rgba(76, 141, 235, 0.10077);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    background: #4c60eb;
  }

  .have-account {
    text-align: center;
    font-size: 15px;
    color: #b0bac9;
  }

  .have-account span {
    color: #4c60eb;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Paper = styled.div`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    width: 80vw;
    height: 93vh;
    border-radius: 5px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Card = styled.div`
  .small-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    border-radius: 5px;
  }

  .small-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;
