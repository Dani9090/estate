import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledWrapper, StyledTitleSection, StyledDescriptionTitle, StyledInner, StyledDesc,StyledImageInner,StyledTitle,Back,H1,InnerEmpty,IMG} from "./Estate.styles"


const Estate = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsEstate(limit: 4) {
        nodes {
          id
          titleestate
          slug
          descriptionestate
          galeryestate {
            url
          }
        }
      }
    }
  `)

  const HowMany = data.allDatoCmsEstate.nodes.length
  return (
    <StyledWrapper>
      <StyledTitleSection>
        <StyledTitle>
          <Back />
          <H1>Nieruchomości</H1>
        </StyledTitle>
        <StyledDescriptionTitle>
          Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz
          nieruchomości, który Cię interesuje.
        </StyledDescriptionTitle>
      </StyledTitleSection>
      {HowMany > 0 ? (
        <StyledInner>
          {data.allDatoCmsEstate.nodes.map(estate => (
            <Link to={estate.slug} key={estate.id}>
              <StyledImageInner key={estate.id}>
                <IMG image={estate.galeryestate[0].url} alt="foto" />
                <StyledDesc>
                  <h4>{estate.titleestate}</h4>
                  <p>{estate.descriptionestate}</p>
                </StyledDesc>
              </StyledImageInner>
            </Link>
          ))}
        </StyledInner>
      ) : (
        <InnerEmpty>
          <div>
            <h3>Przykro nam obecnie nie mamy wolnychy nieruchomości</h3>
          </div>
        </InnerEmpty>
      )}
    </StyledWrapper>
  )
}

export default Estate
