import React from 'react';
import { Button, Wrapper } from './styles';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Wrapper>
            <Link to={'/addcourse'}>
                <Button>
                    اضافه کردن دوره
                </Button>            
            </Link>

            <Link to={'/addnewsoldier'}>
                <Button>
                    اضافه کردن سرباز
                </Button>
            </Link>

            <Link to={'/submitsoldierscore'}>
                <Button>
                    ثبت کردن نمره ی سرباز ها
                </Button>
            </Link>
        </Wrapper>
    );
}

export default Main;