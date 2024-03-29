import React from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  titleSize,
  contentSize,
  className,
  style,
  minParaColors,
  marginTop, // Add marginTop prop
}: ContentBlockProps & {
  titleSize?: string;
  contentSize?: string;
  className?: string;
  style?: React.CSSProperties;
  minParaColors?: string[];
  marginTop?: string; // Define marginTop prop
}) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection className={className} style={{ ...style, marginTop }}> {/* Apply marginTop to style */}
      <Fade direction={direction} triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
          {icon && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" borderRadius="10px" />
            </Col>
          )}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <div className="introText" style={{ fontSize: titleSize }}>
                {t(title)}
              </div>
              <div >
                {Array.isArray(content) ? (
                  content.map((item, index) => (
                    <MinPara key={index} style={{ fontSize: contentSize, color: minParaColors && minParaColors[index] }}>
                      {t(item)}
                    </MinPara>
                  ))
                ) : (
                  <MinPara style={{ fontSize: contentSize }}>
                    {t(content)}
                  </MinPara>
                )}
              </div>
              {direction === "right" ? (
                <ButtonWrapper>
                  {button &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string | string[];
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              {/* {item.icon && (
                                <SvgIcon
                                  src={item.icon}
                                  width="60px"
                                  height="60px"
                                />
                              )} */}
                              {/* <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara> */}
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
