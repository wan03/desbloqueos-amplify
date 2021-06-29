import { getFeaturedPhones } from './getPhones';
import { featuredPhonesMock } from "./featuredPhonesMock";

it('returns featured phones', () => {
   const result = getFeaturedPhones();
   expect(result).toMatchObject(featuredPhonesMock);
})