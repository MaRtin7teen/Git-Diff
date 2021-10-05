import React from 'react';
import styled from "styled-components";
import data from "../sampleData.json";

const Container = styled.div`

    & > .info {
        margin: 2rem;
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;

        & > .userData {
            display: grid;
            grid-template-columns: 50px auto;

            & > .avatar {
                padding-right: 0.5rem;

                & > .avatar-img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
        }

        & > .commit-info {
            text-align: right;
        }

        @media (max-width: 1100px) {
            grid-template-columns: 100%;

            & > .commit-info {
                margin: 1% 50px;
                text-align: left;
            }
        }

        @media (max-width: 700px) {
            grid-template-columns: 100%;

            & > .userData {
                grid-template-columns: 100%;

                & > .avatar {
                    text-align: center;
                    padding: 0.5rem;

                    & > .avatar-img {
                        width: 50px;
                        border-radius: 50%;
                    }
                }
            }

            & > .commit-info {
                margin: 3% 0;
            }
        }
    }
`;


const Info = () => {

    return (
        <Container>
            <div className="info">
                <div className="userData">

                    <div className="avatar">
                        <img src="/logo192.png" className="avatar-img" alt="avatar-img" />
                    </div>

                    <div className="user-header">

                        <div className="header">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quos velit alias porro quidem 
                        </div>

                        <div className="author">
                            <span className="muted">Authored by</span>
                            <span className="body">{" " + data[0].userData.author.name + " "}</span>
                            <span className="muted">four days ago</span>
                        </div>

                        <div className="body-text">
                            {data[0].userData.message}
                        </div>

                    </div>
                </div>

                <div className="commit-info">
                    <div className="muted">

                        {   
                            data[0].userData.committer.name !== data[0].userData.author.name ?
                            <div>
                                Commited by {data[0].userData.committer.name} three days ago
                            </div> : 
                            false
                        }

                        <div>
                            Commit <span className="body">{data[0].userData.oid}</span>
                        </div>

                        <div>
                            Parent <span className='link-monospace link'>{data[0].userData.parents[0].oid}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Info;