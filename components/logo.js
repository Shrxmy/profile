import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;

    img {
        transition: transform 200ms ease;
    }

    &:hover img {
        transform: rotate(12deg) translateY(-1px);
    }
`

const Logo = () => {
    const footprintImg = `/images/mage${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a aria-label="Paulo Tumabing home">
                <LogoBox>
                    <Image src={footprintImg} width={22} height={21} alt="" />
                    <Text
                        color={useColorModeValue('ink.900', 'paper.100')}
                        fontFamily="heading"
                        fontSize="lg"
                        ml={2}
                    >
                        Shroomy
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
