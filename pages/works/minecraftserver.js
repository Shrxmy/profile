import { Container, Badge, Link, List, ListItem, Heading, Box, Tag, Text} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/pageprops';
import P from '../../components/paragraphs';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Minecraft Server">
            <Container>
                <Title>
                    Minecraft Servers <Badge>Block Game LOL</Badge>
                </Title>
                <Box maxW='xl' borderWidth='4px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <Box
                        p='3'
                        mt='1'
                        as='h4'
                        lineHeight='tight'
                    >
                        <p>
                            - These are vanilla Forge servers I have compiled with an Ngrok executable (Used for giving IP to friends who wants to join).
                        </p>
                        <Box p='1' />
                        <p>
                            - For tutorial: First download the chosen version you would like to play with your friends and yourself. Next, run the <Tag>run.bat</Tag> file. Once a terminal pops up and says press a key to continue, exit the command line. After that open the <Tag>eula.txt</Tag> and change eula to true with Notepad or any text editor. Make sure to save cause I know y'all don't like pressing Ctrl + S.
                        </p>
                        <Box p='1' />
                        <p>
                            - Next step, open the <Tag>run.bat</Tag> and wait for the terminal to load the server world. With that done, open Minecraft and choose Multiplayer => Direct Connect and type <Tag>localhost</Tag>. Boom, you are in your server however, if you are experiencing difficulties connecting heres the help.
                        </p>
                        <Box p='1' />
                        <p>
                            - Open the <Tag>server.properties</Tag> file in the folder. Find the line <Tag>online-mode</Tag> and set it to false. Also when you are playing together don't close ngrok and the terminal for the server, these will stop the server from functioning.
                        </p>
                        <Box p='1' />
                        <p>
                            - For the Ngrok stuff. Make an Ngrok account and you will have a code line for you token in Ngrok, make sure to save that. Next, open the <Tag>ngrok.exe</Tag> file and if it prompts to ask your token, paste it in the terminal.
                        </p>
                        <Box p='1' />
                        <p>
                            - Lastly, once your ngrok is set, type <Tag>ngrok tcp -region ap 25565</Tag>. If you are not in Asia you can type these if you are in the specified regions, just replace ap with <Tag>us</Tag> - United States, <Tag>eu</Tag> - Europe, <Tag>au</Tag> - Australia, <Tag>sa</Tag> - South America, <Tag>jp</Tag> - Japan, and <Tag>in</Tag> - India. Once done you will be promted to a new look and the IP you have to share to your friends will look like <Tag>0.tcp.ap.ngrok.io:11111</Tag>.
                        </p>
                        <Box p='1' />
                        <p>
                            - For troubleshoot: If you are getting errors starting up the run.bat you might have not installed Java on your PC/Laptop. High version servers such as 1.17 above require JDK 17 and these can be installed in {' '}<Link href="https://www.oracle.com/java/technologies/downloads/#jdk18-linux"><Link>here</Link></Link>.
                        </p>
                        <Box p='1' />
                        <p>
                            - If your friends have issues connecting with the server mainly having an error <Tag>Unknown Host</Tag> all you have to do is go to your Control Panel => Network and Internet => Network and Sharing Center => Change Adapter Settings (On the left) => Double click the connection you are using => Properties =>  Internet Protocol Version 4
                        </p>
                        <Box p='1' />
                        <p>
                            - Press the "Use the following DNS server adresses" and change it. Prefered DNS: 208.67.222.222 and Alternate DNS Server: 208.67.220.220 (Sample on 1st Image)
                        </p>
                    </Box>
                </Box>

                <Box p='2' />

                <Box maxW='lg' borderWidth='1px' borderColor='grey' borderRadius='xl' overflow='hidden'>
                    <List ml={10} my={4}>
                        <ListItem>
                            <Meta>Link for Servers with Java Installers:</Meta>
                            <Link href='https://drive.google.com/drive/folders/1O3QeKqp09HtU2nnhWlL0aPmq7tmicsVh?usp=sharing'>
                                GDrive Link <ExternalLinkIcon mx="1px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Modded Server Tutorial (Limited to 1.12)</Meta>
                            <Link href='https://youtu.be/xhKY5WQ9VUw'>
                                Watch Here <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Modded Servers I made:</Meta>
                            <Link href='https://drive.google.com/drive/folders/18eHzxgMGHleG9oTUsDGp55fOuUNXcagc?usp=sharing'>
                                GDrive Link <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                <Box p='2' />

                <WorkImage src="/images/work/minecraftdns.png" alt= "Minecraft"/>
                    
                <Box p='2' />
            </Container>
        </Layout>
    )
}

export default Work
