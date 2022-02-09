let x = $.cordys.get().val();

    function aj(method, namespace, parameters) {
      const x = method.split('.');
      let z = $.cordys.get().val();
      z.data = of([]);
      z.data = tap((d) => {
        console.log('...start', new Date().getTime());
      });
      z.data = mergeMap((d) =>
        from(
          $.cordys.ajax({
            method: x[0],
            namespace: namespace,
            dataType: '* json',
            parameters: parameters,
            timeout: 1800000,
          }),
        ),
      );
      z.data = map((d) => $.cordys.json.find(d, x[1]));
      z.data = catchError((d) => {
        return of({ get: 'err' });
      });
      z.data = finalize(() => console.log('...end', new Date().getTime()));
      return z.val();
    }
    x.data = aj(
      'Getbsa_UserScreenAccess2344324234.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess23423423423.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    x.data = aj(
      'Getbsa_UserScreenAccess.bsa_role_access_master',
      'http://schemas.cordys.com/bsaWsApp',
      {},
    );
    let y = $.cordys.get().val();
    y.data = forkJoin(x.data);
    debugger;
    y.val().subscribe((_) => {
      console.log('asdfasdfsafsafsafsadfsdfsafsdaf=>', _);
    });
