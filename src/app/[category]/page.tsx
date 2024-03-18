import { useParams } from 'next/navigation';

import React, { useEffect } from 'react';

export default function Page() {
const {categoryName} = useParams()
    return (
        <div>{categoryName}</div>
    );
}
