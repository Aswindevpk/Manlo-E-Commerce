import styled from "styled-components"
import StyledDivider from "../ui/StyledDivider"

const StyledFooter = styled.div`
    padding: 4rem 5rem;
    display: grid;
    gap:2rem;
    grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;

    @media (max-width: 64rem) { /* ≤1024px (lg) */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 48rem) { /* ≤768px (md) */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 40rem) { /* ≤640px (sm) */
    grid-template-columns: 1fr;
    text-align: center;
  }
`


function Footer() {
    return (
        <>
            <StyledDivider />
            <StyledFooter>
                <div>
                    <h2>MANLO</h2>
                    <p>Be an icon</p>
                </div>
                <div>
                    <h3>MAIN MENU</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Help</p>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <p>The Company</p>
                    <p>Career</p>
                    <p>Press</p>
                </div>
                <div>
                    <h3>DISCOVER</h3>
                    <p>The Team</p>
                    <p>Our History</p>
                    <p>Brand motto</p>
                </div>
                <div>
                    <h3>FIND US ON</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </StyledFooter>
        </>
    )
}

export default Footer