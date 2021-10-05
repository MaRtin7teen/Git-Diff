import React from 'react';
import styled from "styled-components";
import Diff from '../Components/Diff';
import Info from '../Components/Info';

const Container = styled.div`
    & .body-text {
        font-family: Arial;
        font-weight: 400;
        size: 14px;
        line-height: 20px;
    }

    & .header {
        color: #39496A;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }

    & .monospace, .link-monospace {
        font-family: 'Courier New';
        font-weight: bold;
    }

    & .monospace {
        font-size: 12px;
    }

    & .link-monospace {
        font-size: 13px;
    }

    & .body {
        color: #39496A;
    }

    & .muted {
        color: #6D727C;
    }

    & .link {
        color: #1C7CD6;
    }

    & .code-primary {
        color: #657B83;
    }

    & .code-secondary {
        color: #6078A9;
    }
`;

const Commit = () => {

    document.title = "Commit diff Info"

    return (
        <Container>
            
            <Info />
            <Diff />
            <Diff />

        </Container>
    )
}

export default Commit;