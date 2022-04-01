import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import {
  StyledWrapper,
  StyledInner,
  StyledImg,
  IMG,
  StyledSectionTitle,
  StyledTitle,
  Back,
  StyledDetails,
  StyledContact,
  StyledImgContact,
  StyledDescriptionContact,
  StyledCarousel,
  Carousels,
} from "./CreatePages.Styles"

export default function BlogPost({ data }) {
  const estate = data.allDatoCmsEstate.nodes

  return (
    <StyledWrapper>
      {estate.map(post => (
        <StyledInner key={post.id}>
          <StyledCarousel>
            <Carousels>
              {post.galeryestate.map(foto => (
                <StyledImg key={foto.url}>
                  <IMG src={foto.url} alt="foto" />
                </StyledImg>
              ))}
            </Carousels>
          </StyledCarousel>
          <StyledSectionTitle>
            <h4>{post.titleestate}</h4>
            <StyledTitle>
              <Back />
              <h2>{post.descriptionestate}</h2>
            </StyledTitle>
            <p>{post.descriptionpage}</p>
          </StyledSectionTitle>
          <StyledDetails>
            <h4>Dane nieruchomości</h4>
            <div>
              <p>Rodzaj oferty: </p>
              <p>{post.typeOfOffer}</p>
            </div>
            <div>
              <p>Powierzchnia: </p>
              <p>{post.area}</p>
            </div>
            <div>
              <p>Pomieszczenia: </p>
              <p>{post.room}</p>
            </div>
            <div>
              <p>Dostępność: </p>
              <p>{post.availability}</p>
            </div>
          </StyledDetails>
          <StyledContact>
            <StyledImgContact src={post.imgcontact.url} alt="contact" />
            <StyledDescriptionContact>
              <h3>Kontakt</h3>
              <p>{post.namecontact}</p>
              <p>
                <a href={`mailto:${post.emailcontact}`}>{post.emailcontact}</a>
              </p>
              <p>{post.phonecontact}</p>
            </StyledDescriptionContact>
          </StyledContact>
        </StyledInner>
      ))}
    </StyledWrapper>
  )
}

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsEstate(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        titleestate
        slug
        descriptionestate
        descriptionpage
        area
        availability
        typeOfOffer
        room
        locale
        emailcontact
        phonecontact
        namecontact
        imgcontact {
          url
        }
        galeryestate {
          url
        }
      }
    }
  }
`
