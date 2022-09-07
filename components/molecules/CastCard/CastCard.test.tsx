import { cleanup, render, screen } from "utils/test-config";

import CastCard from "./CastCard";
import { ICast } from "types/tv_movies";
import React from "react";

afterEach(cleanup);

describe("CastCard", () => {
  const fakePerson: ICast = {
    adult: true,
    gender: 0,
    id: 0,
    known_for_department: "actor",
    name: "Timmy Jimmy",
    original_name: "Jimmy Timmy",
    popularity: 0,
    profile_path: `https://via.placeholder.com/220x330/000000?text=Image_Of_Timmy`,
    cast_id: 0,
    character: "Dr Tom/Dr Jim/Dr Tim/Dr Bob",
    credit_id: "0",
    order: 0,
  };

  test("Name bold styling", () => {
    const expectedFakePerson = fakePerson;
    const expectedNameStyle = `font-weight: bold;`;

    render(<CastCard person={expectedFakePerson} customImageSrc />);

    expect(screen.getByText(expectedFakePerson.name)).toHaveStyle(
      expectedNameStyle
    );
  });

  test("Fake person playing roles greater than 3. Only show 3", () => {
    const characters = fakePerson.character.split("/");

    const expectedFakePerson = fakePerson;
    const expectedEllipse = "...";
    const expectedCharactersDisplayed = characters.slice(0, 3);
    const expectedCharactersNotDisplay = characters.slice(3, 4);

    render(<CastCard person={expectedFakePerson} customImageSrc />);

    expectedCharactersDisplayed.map((text: string) => {
      screen.getByText(text, { selector: "span" });
    });
    expect(screen.getByText(expectedEllipse));
    expectedCharactersNotDisplay.map((text: string) => {
      expect(screen.queryByText(text)).toBeNull();
    });
  });
});
