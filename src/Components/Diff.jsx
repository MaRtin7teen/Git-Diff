import React from 'react';
import styled from "styled-components";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Container = styled.div`

    & .chevron {
        cursor: pointer;
        border-radius: 50%;

        :hover {
            background-color: #ebebeb;
        }
    }

    & .none {
        display: none;
    }

    & > .diff-open {
        margin: 0 2rem 1.5rem;
        
        & > .file-path {

            & > .path {
                padding-left: 0.25rem;
            }
        }

        & > .code-block {
            border: 2px solid #E7EBF1;

            & > .blue {
                color: #F8FBFF;
            }

            & > .green {
                color: #D8FFCB;
            }

            & > .red {
                color: #FFE4E9;
            }

            & > .white {
                color: #FFFFFF;
            }
        }
    }

    & > .diff-close {
        margin: 2rem;
        margin-bottom: 1.5rem;
    }
`;


const Diff = () => {

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <div className={open ? "diff-open" : "diff-close"}>
                <div className="file-path">
                    {
                        open ?
                        <FiChevronDown className="chevron" onClick={handleOpen} /> :
                        <FiChevronRight className="chevron" onClick={handleOpen} />
                    }
                    <span className="path link">parent/children</span>
                </div>

                <div className={open ? "code-block monospace" : "none"}>
                    bebet
                </div>
            </div>
        </Container>
    )
}

export default Diff;